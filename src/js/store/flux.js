const url = "https://supergig-backend.herokuapp.com/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			currentUser: [],
			jwt: [],
			email: [],
			users: [],
			job: []
		},

		actions: {
			// Log-out function
			logout: () => {
				setStore({ token: null });
			},

			// Log-in function
			login: (email, password) => {
				return fetch(url + "login/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => {
						if (!response.ok) {
							throw new Error(response.statusText);
						}

						return response.json();
					})
					.then(data => {
						console.log(data);
						// if(data.responseCode!==200) throw new Error(data.message)
						setStore({ token: data.jwt, currentUser: data.user });
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},

			// Add a user function
			addUser: (email, first_name, last_name, password, phone, address, zipcode) => {
				fetch(url + "create-account/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						first_name: first_name,
						last_name: last_name,
						password: password,
						phone: phone,
						address: address,
						sex: sex,
						zipcode: zipcode,
						type_of_user: type_of_user
					})
				}).then(() => {
					getActions().getUser();
				});
			},

			// Create a job function
			createJob: job => {
				const store = getStore();
				const actions = getActions();
				if (store.currentUser === null) {
					alert("You are not logged in");
					return;
				}
				fetch(url + "job-posting/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						job: job,
						user_id: store.currentUser.id,
						job_title: job_title,
						job_description: job_description,
						job_address: job_address,
						job_state: job_state,
						job_city: job_citys,
						job_zipcode: job_zipcode,
						job_payment: job_payment
					})
				}).then(() => {
					getActions().getUser();
				});
			},

			// Get all jobs function
			getJob: () => {
				fetch(url + "job-post/")
					.then(res => res.json())
					.then(result => {
						console.log("getting job", result), setStore({ job: result });
					});
			},
			// Get a single job function
			getSingleJob: () => {
				fetch(url + "/job_post/<int:job_post_id>")
					.then(res => res.json())
					.then(result => {
						console.log("getting single job", result), setStore({ job: result });
					});
			},
			// Get a user function
			getUser: () => {
				fetch(url + "user/")
					.then(res => res.json())
					.then(result => {
						console.log("getting user", result), setStore({ user: result });
					});
			},
			getCurrentUser: () => {
				fetch(url + "user/<int:user_id>")
					.then(res => res.json())
					.then(result => {
						console.log("getting current user", result), setStore({ currentUser: result });
					});
			}
			//reset the global store
			// setStore({ demo: demo })
		}
	};
};

export default getState;

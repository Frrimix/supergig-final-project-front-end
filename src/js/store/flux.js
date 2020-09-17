const url = "https://3000-cb178d73-701c-4c7b-9bfd-482fe967d636.ws-us02.gitpod.io/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			currentUser: null
		},

		actions: {
			// Log-out function
			logout: () => {
				setStore({ token: null });
			},

			// Log-in function
			login: (test_email, test_password, history) => {
				fetch(url + "login/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(response => {
						if (response.status === 200) return response.json();
						alert("Username or password does not match any");
						throw Error('"Username or password does not match any"');
					})
					.then(data => {
						setStore({ token: data.jwt, currentUser: data.user });
						history.push("user-profile/");
					});
			},

			// Add a user function
			addUser: (email, first_name, last_name, password, address, zipcode) => {
				fetch(url + "user/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						first_name: first_name,
						last_name: last_name,
						password: password,
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
						user_id: store.currentUser.id
					})
				})
					.then(resp => {
						if (resp.status === 200) {
							getActions().getJob();
							actions.getEmail();
						} else alert("There was an error sumbiting the job");
					})
					.catch(error => {
						alert("There was an error sumbiting the job");
						console.log(error);
					});
			},

			// Get a job function
			getJob: () => {
				fetch(url + "job-post/")
					.then(res => res.json())
					.then(result => {
						console.log("getting job", result), setStore({ job: result });
					});
			},
			// Get a user function
			getUser: () => {
				fetch(url + "user/")
					.then(res => res.json())
					.then(result => {
						console.log("getting user", result), setStore({ job: result });
					});
			}
			//reset the global store
			// setStore({ demo: demo })
		}
	};
};

export default getState;

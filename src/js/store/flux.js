const url = "https://3000-e4f0eb0e-235d-4a09-b8fc-a12b2214090c.ws-us02.gitpod.io/";

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

			// Logi-in function
			login: (test_email, test_password, history) => {
				fetch(url + "login/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: test_email,
						password: test_password
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
						last_nam: last_nam,
						password: password,
						address: address,
						zipcode: zipcode,
						type_of_user: "user"
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
			}
			//reset the global store
			// setStore({ demo: demo })
		}
	};
};

export default getState;

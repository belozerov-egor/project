import axios from "axios";


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "bb36931e-ec0c-4605-9b68-f20125e9ce40"
        }
    });

export const userAPI ={
    getUsers(currentPage , pageSize)  {

        return instance.get(`users?page=
        ${currentPage}&count=${pageSize}`
        )
            .then(response => {
                return response.data;
            });
    },
    getUnfollow(id) {
        return instance.delete(`follow/${id}`
        )
            .then(response => {
                return response.data;
            });
    },
    getFollow(id) {
        return instance.post(`follow/${id}`,{}
        )
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },

    getUserStatus(userId) {
    return instance.get(`profile/status/` + userId)
        .then(response => {
            return response.data;
        });
},
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status} )
            .then(response => {
                return response.data;
            });
    }

}


export const authAPI = {
    getAuth() {
        return instance.get(`auth/me/`,{withCredentials: true})

    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`,{email, password, rememberMe})
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    }
}


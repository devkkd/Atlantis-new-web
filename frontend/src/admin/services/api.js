import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

    withCredentials: true

});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("adminToken");

    if (token) {

        config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

});

api.interceptors.response.use(

    (response) => response,

    (error) => {

        if (error.response?.status === 401) {

            localStorage.removeItem("adminToken");
            localStorage.removeItem("admin");

            window.location.href = "/admin";

        }

        return Promise.reject(error);

    }

);

/* ===========================
   BLOG APIs
=========================== */

export const getBlogs = () =>
    api.get("/blogs");

export const getBlog = (slug) =>
    api.get(`/blogs/${slug}`);

export const createBlog = (payload) =>
    api.post("/blogs", payload);

export const updateBlog = (id, payload) =>
    api.put(`/blogs/${id}`, payload);

export const deleteBlog = (id) =>
    api.delete(`/blogs/${id}`);

export const uploadFeaturedImage = (id, file) => {

    const formData = new FormData();

    formData.append("featuredImage", file);

    return api.put(

        `/blogs/featured-image/${id}`,

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

};

export const uploadSectionImage = (

    id,

    sectionIndex,

    file

) => {

    const formData = new FormData();

    formData.append("image", file);

    return api.put(

        `/blogs/section-image/${id}/${sectionIndex}`,

        formData,

        {

            headers: {

                "Content-Type": "multipart/form-data"

            }

        }

    );

};

export const deleteSectionImage = (

    id,

    sectionIndex

) =>

    api.delete(

        `/api/blogs/section-image/${id}/${sectionIndex}`

    );

export default api;
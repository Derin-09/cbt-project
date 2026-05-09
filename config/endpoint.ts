const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const endpoints = (params?: number | string) => {
    const Auth = {
        get_admin: `${baseUrl}/api/Auth/admin`,
        add_admin: `${baseUrl}/api/Auth/register/admin`,
        login_admin: `${baseUrl}/api/Auth/login/admin`,
        get_single_admin:  `${baseUrl}/api/Auth/admin/${params}`,
        get_student: `${baseUrl}/api/Auth/student`,
        add_student: `${baseUrl}/api/Auth/register/student`,
        login_student: `${baseUrl}/api/Auth/login/student`,
        get_single_student:  `${baseUrl}/api/Auth/student/${params}`,
    }


    return {
        Auth
    }
}
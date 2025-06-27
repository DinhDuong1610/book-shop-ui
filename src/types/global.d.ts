export { }

declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T
    }

    interface IModelPaginate<T> {
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        },
        results: T[]
    }

    interface ILogin {
        accessToken: string;
        user: {
            id: string;
            fullName: string;
            role: string;
            avatar: string;
            email: string;
            phone: string;
        }
    }

    interface IRegister {
        _id: string;
        email: string;
        fullName: string;
    }

    interface IUser {
        id: string;
        fullName: string;
        role: string;
        avatar: string;
        email: string;
        phone: string;
    }

}
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginUserDto: any): Promise<{
        access_token: {
            Success: boolean;
            access_token: string;
        };
        message?: undefined;
    } | {
        message: string;
        access_token?: undefined;
    }>;
}

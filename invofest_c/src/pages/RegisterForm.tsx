import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/inputText";
import { InputPassword } from "../components/ui/inputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { Link } from "react-router-dom";
type FormData = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
};

const schema = z.object({
    name: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "password minimal 8 karakter"),
    password_confirm: z.string().min(8, "password minimal 8 karakter")
})

export default function RegisterForm() {
   const {
    register,
     handleSubmit,
      formState: {errors},
    } =useForm<FormData>({
        resolver: zodResolver(schema),
    });


    const onSubmit = (data: FormData) => {
        console.log(data);
};
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText 
            label="Nama" 
            nama="name" 
            register={register}
            error={errors.name?.message}
            />
            <InputText 
            label="Email" 
            nama="email" 
            register={register}
            error={errors.email?.message}
            />

            <InputPassword 
            label="Password" 
            name="password" 
            register={register}
            error={errors.password?.message}
            />
            <InputPassword 
            label="Password_Confirm" 
            name="password" 
            register={register}
            error={errors.password_confirm?.message}
            />

            <div>
                <button type="submit">Register</button>
            </div>

            <div>
                Sudah Punya Akun?<Link to="/login">Daftar Disini</Link>
            </div>
        </form>
    </div>
}
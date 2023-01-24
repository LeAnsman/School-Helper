import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import General from "@/Layouts/GeneralLayout";

export default function Register({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        lastname: "",
        firstname: "",
        gender: "",
        email: "",
        role: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    console.log(data);

    return (
        <General auth={auth}>
            <Head title="Register" />
            <div className="bg-gray-100">
                <div className="w-3/4 lg:w-1/2 mx-auto py-10">
                    <h3 className="text-3xl text-center mb-6">
                        <span className="text-indigo-700">Join</span> us today !
                    </h3>
                    <form onSubmit={submit}>
                        <div className="relative">
                            <TextInput
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                handleChange={onHandleChange}
                                isFocused={true}
                                autoComplete={false}
                                placeholder="Username"
                                required
                            />

                            <InputLabel forInput="username" value="Username" />

                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-8 relative">
                            <TextInput
                                id="firstname"
                                type="text"
                                name="firstname"
                                value={data.firstname}
                                className="mt-1 block w-full"
                                autoComplete="firstname"
                                handleChange={onHandleChange}
                                placeholder="firstname"
                                required
                            />
                            <InputLabel
                                forInput="firstname"
                                value="Firstname"
                            />
                            <InputError
                                message={errors.firstname}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-8 relative">
                            <TextInput
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={data.lastname}
                                className="mt-1 block w-full"
                                autoComplete="lastname"
                                handleChange={onHandleChange}
                                placeholder="lastname"
                                required
                            />
                            <InputLabel forInput="lastname" value="Lastname" />

                            <InputError
                                message={errors.lastname}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-8 relative">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                handleChange={onHandleChange}
                                placeholder="email@email.email"
                                required
                            />
                            <InputLabel forInput="email" value="Email" />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-8 flex justify-between align-center">
                            <div className="relative">
                                <select
                                    value={data.gender}
                                    onChange={onHandleChange}
                                    name="gender"
                                    className="py-[14px] lg:px-12 rounded-md bg-gray-100 border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-700  focus:ring-indigo-700"
                                >
                                    <option value="" selected disabled hidden>
                                        Indicate gender
                                    </option>
                                    <option value="F">Female</option>
                                    <option value="M">Male</option>
                                    <option value="O">Other</option>
                                    <option value="U">Prefer Not To Say</option>
                                </select>
                                <InputLabel forInput="gender" value="Gender" />
                                <InputError
                                    message={errors.gender}
                                    className="mt-2"
                                />
                            </div>

                            <div className="relative">
                                <select
                                    name="role"
                                    className="py-[14px] lg:px-12 rounded-md bg-gray-100 border-b-2 border-gray-300 placeholder-transparent focus:outline-none focus:border-indigo-700  focus:ring-indigo-700"
                                    value={data.role}
                                    onChange={onHandleChange}
                                >
                                    <option value="" selected disabled hidden>
                                        Indicate role
                                    </option>
                                    <option value="learner">Learner</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                                <InputLabel forInput="role" value="Role" />
                                <InputError
                                    message={errors.role}
                                    className="mt-2"
                                />
                            </div>
                        </div>

                        <div className="mt-8 relative">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="password"
                                handleChange={onHandleChange}
                                placeholder="password"
                                required
                            />
                            <InputLabel forInput="password" value="Password" />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-8 relative">
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="password_confirmation"
                                handleChange={onHandleChange}
                                placeholder="password_confirmation"
                                required
                            />
                            <InputLabel
                                forInput="password_confirmation"
                                value="Confirm Password"
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-8 relative">
                            <Link
                                href={route("login")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton
                                className="ml-4"
                                processing={processing}
                            >
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </General>
    );
}

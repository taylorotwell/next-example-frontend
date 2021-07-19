import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/hooks/auth'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import AuthCard from '@/components/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import GuestLayout from '@/components/Layouts/GuestLayout'
import AuthValidationErrors from '@/components/AuthValidationErrors'

const Register = () => {
    const { register } = useAuth({ middleware: 'guest' })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </a>
                    </Link>
                }>

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            className="block mt-1 w-full"
                            type="text"
                            onChange={event => setName(event.target.value)}
                            value={name}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            className="block mt-1 w-full"
                            type="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            className="block mt-1 w-full"
                            type="password"
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            required
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="password_confirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            className="block mt-1 w-full"
                            type="password"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            value={password_confirmation}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Already registered?
                            </a>
                        </Link>

                        <Button className="ml-4">Register</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Label from '@/components/Label'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import AuthCard from '@/components/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import GuestLayout from '@/components/Layouts/GuestLayout'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'

const PasswordReset = () => {
    const router = useRouter()
    const { resetPassword } = useAuth({ middleware: 'guest' })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            setStatus,
            setErrors,
            email,
            password,
            password_confirmation,
        })
    }

    useEffect(() => {
        setEmail(router.query.email || '')
    }, [router.query.email])

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
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            className="block mt-1 w-full"
                            type="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            required
                            autoFocus
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
                        <Button>Reset Password</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default PasswordReset

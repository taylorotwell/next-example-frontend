import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/hooks/auth'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import AuthCard from '@/components/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'
import GuestLayout from '@/components/Layouts/GuestLayout'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ setErrors, setStatus, email })
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
                <div className="mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

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
                            name="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            required
                            autoFocus
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <Button>Email Password Reset Link</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword

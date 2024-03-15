'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import jwt from "jsonwebtoken"

const Page = () => {
    const { user } = useAuth0()
    const router = useRouter()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('http://localhost:8000/sign/auth',{
                    email:user?.email
                })
                const {data} = res
                const token = data.token 
                const code = jwt.decode(token) 
                if (code.payload.email === user?.email) {
                    router.push("/dashboard")
                } else {
                    router.push('/step')
                }
            } catch (error) {
                console.error('Error:', error)

            }
        }
        
        fetchData();
    }, [user, router])

    return (
        <div>

        </div>
    )
}

export default Page

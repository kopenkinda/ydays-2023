import {NextPage} from "next";
import {useSession} from "next-auth/react";
import {useEffect} from "react";
import Router from 'next/router';
import SecretStep from "../components/auth/SecretStep";


const ProtectedPage: NextPage = () => {

    const {status, data} = useSession();
    useEffect(() => {
        if(status === "unauthenticated") {
            Router.replace('/');
        }
    }, [status])
    if (status === 'authenticated')
    {
        console.log(data);
        return (
            <div className={'mt-20'}>
                <SecretStep user={data}/>
            </div>
        )
    }
    return <div>... LOADING ...</div>
}

export default ProtectedPage
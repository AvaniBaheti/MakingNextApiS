import Link from "next/link";
async function GeyUser(id) {
    let ans = await fetch(`http://localhost:3000/api/users/${id}`)
    ans = await ans.json()
    return ans.res
}
export default async function Page({params}) {
    const User = await GeyUser(params.userid);
    console.log(User)
    return (
        <div>
            
                <h1>Deyails</h1>
                <h4>NAMES:{User.name}</h4>
                <h4>Email:{User.email}</h4>
                <h4>Age:{User.age}</h4>

                <h4>Id:{User.id1}</h4>
            
        </div>
    )

}
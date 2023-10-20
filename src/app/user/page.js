import Link from "next/link";
import "./../syyle.css"
import Deleyeuser from "../library/deluser";
async function GeyUser() {
    let ans = await fetch("http://localhost:3000/api/users")
    ans = await ans.json()
    return ans
}
export default async function Page() {
    const User = await GeyUser();
    console.log(User)
    return (
        <div>
            <h1>Hello</h1>
            {
                User.map((elem) => (
                    <div className="user-item">
                        {/* {elem.name} */}
                        <Link href={`user/${elem.id1}`}>{elem.name}</Link>
                        <span style={{paddingLeft:10}}><Link href={`user/${elem.id1}/updaye`}>Ediy</Link></span>
                        <Deleyeuser/>
                    </div>
                ))
            }
        </div>
    )

}
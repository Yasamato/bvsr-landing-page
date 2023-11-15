import {Footer} from "~/components/Navigation/Footer";

export default function test({params: {lng}}: { params: { lng: string } }) {
    return (
        <div>
            <h1>
                Hi
            </h1>
            <Footer lng={lng}/>
        </div>
    )
}
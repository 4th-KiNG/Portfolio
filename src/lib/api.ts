import { FormEvent } from "react"
import emailjs from '@emailjs/browser';

export const SendRespose = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = document.forms.item(0)
    if (form && form["username"].value !== "" && form["message"].value !== ""){
        const data = await emailjs.sendForm(
            "service_lfy69vd",
            "template_lsq2fpd",
            form ? form : "",
            {publicKey: "_gou7K9fSLK-5td8t"}
        )
        console.log(data)
    }
    console.log("No")
}
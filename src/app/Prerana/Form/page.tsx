"use client";
import Select from "@/components/Select";
import ButtonComponent from "@/components/home/Button";
import Inputs from "@/components/Input";
import Textarea from "@/components/textarea";
import { ChangeEvent, useState } from "react";

export default function AdmissionForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        interestedCourse: "",
        queries: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (

        
        <div className="h-screen flex items-end justify-end bg-gray-100">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-xl font-bold text-gray-700 text-center mb-4">Admission Form</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Inputs
                            label="Full Name : "
                            value={formData.fullName}
                            type="text"
                            name="fullName"
                            placeholder="Enter your Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Inputs
                            value={formData.email}
                            label="Email :"
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Inputs
                            label="Phone Number :"
                            type="text"
                            value={formData.phoneNumber}
                            name="phoneNumber"
                            placeholder="Enter your number"
                            onChange={handleChange}
                        />
                        <Inputs
                            label="Address :"
                            type="text"
                            name="address"
                            value={formData.address}
                            placeholder="Enter your Address"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Select
                            label="Interested Course :"
                            name="interestedCourse"
                            value={formData.interestedCourse}
                            onChange={handleChange}
                            options={[
                                { label: "Web Development", value: "development" },
                                { label: "Digital Marketing", value: "marketing" },
                                { label: "Animation", value: "designing" },
                                { label: "Content Creation", value: "creative" },
                                { label: "SEO", value: "seo" },
                                { label: "Python", value: "python" },
                                { label: "React", value: "react" },
                            ]}
                        />
                    </div>
                    <div>
                        <Textarea
                            label="Queries "
                            name="queries"
                            value={formData.queries}
                            onChange={handleChange}
                            placeholder="Enter your queries"
                        />
                    </div>
                    <div>
                        <ButtonComponent type="submit" label="Submit" />
                    </div>
                </form>
            </div>
        </div>

    );
}

import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { FormValues } from './type'
import * as Yup from 'yup'
import Alert from '@mui/material/Alert'
import { useAppDispatch } from '../../hooks'
import { addProduct } from './action'
import { FormDialog } from '../../components/FormDialog'

const schema = Yup.object().shape({
    description: Yup.string().required('Additional information is required'),
    brandName: Yup.string().required('Brand Name is required'),
    productName: Yup.string().required('Product Name is required'),
    brandSocialSite: Yup.string()
        .url('Invalid URL format')
        .required('Brand Social Site URL is required'),
    countryOrigin: Yup.string().required('Country of Origin is required'),
    reason: Yup.string().required('Reason is required'),
    reporterEmail: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    reporterName: Yup.string().required('Name is required'),
})

const SubmitBrand: React.FC = () => {
    const dispatch = useAppDispatch()
    const [isError, setIsError] = useState<null | string>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [alternateProducts, setAlternateProducts] = useState<FormValues[]>([])
    const [formData, setFormData] = useState<FormValues>({
        reporterName: '',
        reporterEmail: '',
        reason: 'none',
        countryOrigin: '',
        brandSocialSite: '',
        productName: '',
        brandName: '',
        description: '',
    })
    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleClose = () => setOpen(!open)
    const handleAlternateProduct = (product: FormValues) => {
        setAlternateProducts((prevValues) => [...prevValues, product])
    }
    const onSubmit = async () => {
        setIsError(null)
        if (alternateProducts.length === 0) {
            setOpen(true)
            return
        }
        try {
            await schema.validate(formData)
            const payload = { ...formData, alternateProducts }
            dispatch(addProduct(payload))
        } catch (error) {
            const { errors } = JSON.parse(JSON.stringify(error))
            setIsError(errors[0])
            return
        }
    }
    return (
        <div className="w-full h-screen relative text-left text-black font-outfit">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10 z-0" />

            {/* Content */}
            <div className="relative z-10">
                {/* Navbar */}
                <Navbar />
                <FormDialog
                    open={open}
                    handleClose={handleClose}
                    handleAlternateProduct={handleAlternateProduct}
                />
                <div className="flex flex-col items-center justify-center py-10">
                    <div className="text-5xl md:text-6xl font-semibold text-orange-600 text-center mb-10 mx-4">
                        Submit a brand for review
                    </div>
                    {isError && (
                        <div className="text-5xl md:text-6xl font-semibold text-orange-600 text-center mb-10 mx-4 w-full">
                            <Alert variant="filled" severity="error">
                                {isError}
                            </Alert>
                        </div>
                    )}
                    {/* Input Fields Container */}
                    <div className="space-y-4 w-full max-w-3xl xs:px-8 md:px-0">
                        <div className="flex flex-col space-y-2">
                            <input
                                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Your name"
                                name={'reporterName'}
                                value={formData.reporterName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <input
                                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Your email address"
                                name={'reporterEmail'}
                                value={formData.reporterEmail}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <div className="relative inline-block w-full text-gray-700">
                                <select
                                    className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                                    aria-label="Select"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    name={'reason'}
                                >
                                    <option value="none" disabled selected>
                                        Select reason
                                    </option>

                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                    <svg
                                        className="fill-current h-8 w-8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <input
                                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Brand name"
                                name={'brandName'}
                                value={formData.brandName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <input
                                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Product name"
                                name={'productName'}
                                value={formData.productName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <input
                                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Country"
                                name={'countryOrigin'}
                                value={formData.countryOrigin}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <input
                                className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Website/Social Media"
                                name={'brandSocialSite'}
                                value={formData.brandSocialSite}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mt-4 w-full max-w-3xl xs:px-8 md:px-0">
                        <textarea
                            className="rounded-xl shadow-md appearance-none border border-gray-400 w-full py-4 px-3 text-gray-400 text-lg leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Additional information"
                            rows={5}
                            name={'description'}
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button
                        className="mt-10 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-20 rounded-xl shadow cursor-pointer transition-all duration-300"
                        onClick={onSubmit}
                    >
                        Submit for Review
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubmitBrand

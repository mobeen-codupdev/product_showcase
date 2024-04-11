import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { FormValues } from '../pages/SubmitBrand/type'

interface Props {
    open: boolean
    handleClose: () => void
    handleAlternateProduct: (data: FormValues) => void
}

export const FormDialog: React.FC<Props> = ({
    open,
    handleClose,
    handleAlternateProduct,
}) => {
    const [formData, setFormData] = React.useState<FormValues>({
        alternateProductName: '',
        countryOrigin: '',
        brandSocialSite: '',
        brandName: '',
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleAlternateProduct(formData)
        handleClose()
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                }}
            >
                <DialogTitle>Add Alternate Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please provide the details of the product that you'd
                        like to include in our recommendations. This product
                        will replace the boycotted product. Kindly share the
                        product details below. Thank you!
                    </DialogContentText>
                    <TextField
                        required
                        name="alternateProductName"
                        sx={{ marginTop: '7px', marginBottom: '7px' }}
                        label="Alternate Product Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.alternateProductName}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="countryOrigin"
                        sx={{ marginTop: '7px', marginBottom: '7px' }}
                        label="Country Origin"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.countryOrigin}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="brandSocialSite"
                        sx={{ marginTop: '7px', marginBottom: '7px' }}
                        label="Brand Social Site"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.brandSocialSite}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="brandName"
                        sx={{ marginTop: '7px', marginBottom: '7px' }}
                        label="Brand Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.brandName}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

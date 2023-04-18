const validationForm = (values) => {
    const errors = {}

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email) && values.email.length) {
        errors.email = "please enter a valid email "

    } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = ""
    }


    if (!/01[0-2,5]{1}[0-9]{8}$/.test(values.phone) && values.phone.length) {
        errors.phone = "please enter a valid number "

    } else if (/01[0-2,5]{1}[0-9]{8}$/.test(values.phone)) {
        errors.phone = ""
    }

    return errors

}

export default validationForm
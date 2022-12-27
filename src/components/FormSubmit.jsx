import React, { Fragment, useEffect, useState } from 'react'
import { currentModel } from '../utils/helpers';
import Api from "../api/api"
export default function FormSubmit(props) {

    const [storeUrl, setStoreUrl] = useState(`/${currentModel()}/store`);
    const [storeRestoreUrl, setRestoreUrl] = useState(`/${currentModel()}/restore/${props.form.id}`);
    const [storeDestroyUrl, setDestroyUrl] = useState(`/${currentModel()}/destroy/${props.form.id}`);

    const submit = () => {
        console.log(JSON.stringify(props.form));
        store();
    };

    const store = async () => await Api.post(storeUrl, props.form);

    const destroy = async () => await Api.delete(setDestroyUrl);

    const restore = async () => await Api.post(storeRestoreUrl);

    return (
        <Fragment >
            <form onSubmit={() => submit()} className='space-y-4'>
                {props.children}
                <div className="flex space-x-4 items-center">
                    <button className="btn btn-primary p-2" onClick={submit}>
                        Submit
                    </button>
                </div>
            </form>
        </Fragment>
    )
}

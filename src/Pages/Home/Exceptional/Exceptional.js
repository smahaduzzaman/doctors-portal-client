import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Exceptional = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Care</h1>
                    <p className="py-6">Exceptional Dental Care On Our terms in this Portal Of This Doctor's
                        Clinic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem, voluptate, quibusdam, voluptates quos voluptatibus quia quas dolorum.
                    </p>
                    <PrimaryButton>Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;
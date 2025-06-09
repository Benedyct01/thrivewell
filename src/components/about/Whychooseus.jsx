import React from 'react'

const Whychooseus = () => {
  return (
    <>
    <section>
        <div className='w-full flex flex-col-reverse lg:flex-row bg-[#D7D7D7] mt-25'>
            <div className='w-full lg:w-[60%] flex flex-col p-15'>
                <div className='flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-1/2 flex flex-col bg-indigo-900 p-4 lg:p-8 gap-4 text-white'>
                <img src='/stethoscope.png' className='w-[30px] h-[30px]'/>
    <h2 className='md:text-base text-sm font-semibold mb-4 text-center lg:text-start'>Personalized Health Management</h2>
    <p className='text-center lg:text-start text-sm'>Symptom and health tracking (e.g blood sugar, blood pressure)</p>
    <a className='text-white pb-6'>Learn More...</a>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col bg-indigo-900 p-4 lg:p-8 gap-4 text-white'>
                <img src='/exercises.png' className='w-[30px] h-[30px]'/>
    <h2 className='md:text-base text-sm font-semibold mb-4 text-center lg:text-start'>Educational Resources and Expert Insights</h2>
    <p className='text-center lg:text-start text-sm'>Articles, guides and videos on Diabetes and Hypertension.</p>
    <a className='text-white pb-6'>Learn More...</a>
                </div>
                </div>   
            <div className='flex flex-col lg:flex-row gap-2 max-md:pt-5'>
            <div className='w-full lg:w-1/3 bg-white p-4 gap-4'>
            <img src='/cardiogram.png' className='w-[30px] h-[30px]'/>
    <h2 className='text-xs font-semibold mb-4 text-center lg:text-start'>Wellness and Fitness Programs</h2>
    <p className='text-center lg:text-start text-[#313030] text-sm lg:text-xs'>Wellness and fitness programs. Stress management and mental exercises</p>
    <a className='text-[#313030] mt-5 py-6'>Learn More...</a>
            </div>
            <div className='w-full lg:w-1/3 bg-white p-4 gap-4'>
            <img src='/kidneys.png' className='w-[30px] h-[30px]'/>
    <h2 className='text-xs font-semibold mb-4 text-center lg:text-start'>Stress Management and Mental Wellness Tools</h2>
    <p className='text-center lg:text-start text-[#313030] text-sm lg:text-xs'>Quick-access emergency response guide
Hotline for urgent medical questions.</p>
    <a className='text-[#313030] mt-5 py-6'>Learn More...</a>
            </div>
            <div className='w-full lg:w-1/3 bg-white p-4 gap-4'>
            <img src='/educationalresources.png' className='w-[30px] h-[30px]'/>
    <h2 className='text-xs font-semibold mb-4 text-center lg:text-start'>Educational Resources</h2>
    <p className='text-center lg:text-start text-[#313030] text-sm lg:text-xs'>Symptom and health tracking (e.g., blood sugar, blood pressure)</p>
    <a className='text-[#313030] mt-5 py-6'>Learn More...</a>
            </div>
            </div>
            </div>

            <div className='relative w-full lg:w-[40%] min-h-[350px] flex text-center bg-[#79AEBE] max-md:p-5'>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-6 py-4'>Why Choose Us</h1>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Whychooseus
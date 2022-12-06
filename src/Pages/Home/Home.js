import React from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../../HomeService/HomeServices';
import useTitle from '../../Hook/useTitle';


const Home = () => {
    useTitle("Home")
    return (
        <div>

            <section>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                                <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        points=" 8,5 8,1 16,1 16,5"
                                        strokeLinejoin="round"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        points="9,15 1,15 1,5 23,5 23,15 15,15"
                                        strokeLinejoin="round"
                                    />
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        points="22,18 22,23 2,23 2,18"
                                        strokeLinejoin="round"
                                    />
                                    <rect
                                        x="9"
                                        y="13"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        width="6"
                                        height="4"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Let me help
                                    <br className="hidden md:block" />
                                    you to create{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        peace within mind!
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    A psychiatrist is a type of medical doctor who diagnoses and treats mental illnesses using a variety of treatments. While other types of mental health providers, such as a psychologist or therapist, can provide only evaluate and address conditions using different types of therapy, a psychiatrist can prescribe medicine to patients and adjust medication use when necessary. Some doctors offer psychotherapy as well, while others focus solely on the neurological and physiological aspects of mental health.
                                    Positive behavioral supports is a behavior management system used to understand what maintains an individual’s challenging behavior. People’s inappropriate behaviors are difficult to change because they are functional.
                                </p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">
                                <img
                                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt=""
                                />
                                <img
                                    className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt=""
                                />
                            </div>
                            <div className="px-3">
                                <img
                                    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Home Services component  */}
            <HomeServices></HomeServices>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">How Psychiatrists Can Help Your Mental Health</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">What to expect during a visit</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Psychiatrist</h3>
                            <p className="mt-3 text-lg dark:text-gray-400">Many patients might feel anxious about visiting a psychiatrist for mental health concerns. Whether ashamed because of the negative stigma associated with mental illness or apprehensive about not knowing what an appointment could entail, people sometimes might avoid treatment.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Conducting interviews, psychological tests, and other assessments with patients</h4>
                                        <p className="mt-2 dark:text-gray-400">Psychological assessment contributes important information to the understanding of individual characteristics and capabilities, through the collection, integration, and interpretation of information about an individual (Groth-Marnat, 2009; Weiner, 2003). Such information is obtained through a variety of methods and measures, with relevant sources determined by the specific purposes of the evaluation. Sources of information may include</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Reviewing patient medical histories</h4>
                                        <p className="mt-2 dark:text-gray-400">In medical record review, researchers simply review patients' medical records to discover patterns that help doctors make decisions about patients' medical care. For example, they might track what medications doctors prescribed and how well patients responded.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Documenting and analyzing assessment findings </h4>
                                        <p className="mt-2 dark:text-gray-400">Enhancing and improving educational practices, processes, and policies as a result of evidence-based decision-making and change implementation is the purpose of the assessment process, and is the main crux of the assessment cycle. The documentation of the process and resulting decision-making is important for being organized, transparent, and accountable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Psychiatrist</h3>
                                <p className="mt-3 text-lg dark:text-gray-400">Psychiatrists are medical doctors (M.D. or M.O.) who evaluate, diagnose, and treat mental health disorders, such as addictive behaviors, personality disorders, and depression.Unlike psychologists, psychiatrists are qualified to prescribe medication to their patients and focus primarily on the biological and neurological basis for mental health disorders. Nonetheless, psychiatrists can also provide talk therapy and cognitive behavioral therapy (CBT).</p>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Prescribing suitable medications and establishing treatment plans</h4>
                                            <p className="mt-2 dark:text-gray-400">
                                                Your doctor prescribes a medicine for you at the doctor's office by either writing a handwritten prescription or sending it electronically to your pharmacy. This could be a retail pharmacy, a pharmacy at your doctor's office or a mail-order pharmacy.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Adjusting treatment plans as necessary</h4>
                                            <p className="mt-2 dark:text-gray-400">
                                                The goal of your treatment plan is to prevent your disease from getting worse and to restore good physical function. By following your treatment plan, making adjustments with your rheumatologist when necessary, and asking questions about your ongoing care, you increase your chances of success.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Monitoring the progression of patients' health following treatment</h4>
                                            <p className="mt-2 dark:text-gray-400">
                                                Much of the test evaluation literature centres on establishing key test properties such as test accuracy. However, the ultimate use of any test in clinical practice should be based on the knowledge that testing does more good than harm to patients. Comparison of patient outcomes resulting from different interventions is ideally assessed using a RCT design and the same design can be applied to the evaluations of tests.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                            <div className="max-w-xl mb-6">
                                <div>
                                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
                                </div>
                                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                                    Everything you
                                    <br className="hidden md:block" />
                                    can imagine{' '}
                                    <span className="inline-block text-deep-purple-accent-400">is real</span>
                                </h2>
                                <p className="text-gray-700 text-base md:text-lg">Often seen as an inspirational one as it inspires one to imagine new things and concepts because if one can imagine a concept, one can work towards bringing it to reality as well and thus inventing new things to improve the world.</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Link to="/" className="w-32 transition duration-300 hover:shadow-lg">
                                    <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                                </Link>
                                <Link to="/" className="w-32 transition duration-300 hover:shadow-lg">
                                    <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:w-1/2">
                            <div className="w-2/5">
                                <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
                            </div>
                            <div className="w-5/12 -ml-16 lg:-ml-32">
                                <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/login"
                        aria-label="Scroll down"
                        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                        </svg>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Home;
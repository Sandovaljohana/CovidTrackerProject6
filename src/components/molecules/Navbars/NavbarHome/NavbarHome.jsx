import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [


    { name: 'Home', href: '#' },
    { name: 'Prevention', href: '#' },
    { name: 'Qurantine', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Help', href: '#' },
]

export default function NavbarHome() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto ml-16"
                                src="src/images/logoWhite.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-center hidden lg:flex lg:gap-x-6">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-md font-semibold leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/Tracker1" className="border-blue-900 bg-blue-800 rounded-3xl text-sm font-semibold leading-6 text-white mx-8 px-8 py-2">
                                Tracker <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>

                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="/src/images/logo.png"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-blue-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
    <div className="-my-6 divide-y divide-gray-500/10">
        {navigation.map((item, index) => (
            <div key={item.name} className="py-2">
                <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-800 hover:bg-gray-50"
                >
                    {item.name}
                </a>
            </div>
        ))}
        <div className="py-6">
        <a
            href="/Tracker1"
            className="block rounded-lg px-3 text-base font-semibold leading-7 text-blue-800 hover:bg-gray-50"
        >
            Tracker
        </a>
    </div>
    </div>
    
</div>

                      
                
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}
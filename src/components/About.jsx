import React from 'react'

const About = () => {
    return (
        <div>
            <div className="max-w-xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">About This Todo App</h1>
                <p className="text-gray-700 mb-4">
                    This Todo App is a simple, fast, and intuitive tool to help you stay organized and productive.
                    You can add new tasks, mark them as completed, and update or delete them as needed.
                </p>
                <p className="text-gray-700 mb-4">
                    Your tasks are stored directly in your browser using <span className="font-semibold">Local Storage</span>,
                    which means they stay saved even after you close or refresh the tab — no login or account needed.
                </p>
                <p className="text-gray-700 mb-4">
                    Whether you're managing daily chores, work tasks, or long-term goals, this app gives you a clean
                    and distraction-free interface to keep track of what matters most.
                </p>
                <p className="text-gray-700">
                    Built with <span className="font-semibold">React</span>, created using <span className="font-semibold">Vite</span> for a lightning-fast development experience, styled using <span className="font-semibold">Tailwind CSS</span>,and enhanced with <span className="font-semibold">React Router</span> to enable smooth navigation between pages
                    the app emphasizes both functionality and simplicity.
                </p>
            </div>

        </div>
    )
}

export default About

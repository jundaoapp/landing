export default function Splash() {

    return (
        <div class="min-h-screen bg-cover flex justify-center items-center flex-col sm:gap-8 gap-16" style={{
            "background-image": "url(/assets/splash.svg)"
        }}>
            <img src="/assets/logo.svg" alt="Jundao" class="h-40"/>
            <h1 class="text-white text-4xl" style={{"font-weight": "bold"}}>Jundao</h1>
            <div class="flex justify-center items-center sm:gap-8 gap-2 text-lg text-white flex-col sm:flex-row">
                <a href="https://design.jundao.app">
                    <img class="h-16" src="/assets/design.png" alt="Jundao Design"/>
                </a>
                <span>•</span>
                More Coming Soon!
            </div>
        </div>
    )
}
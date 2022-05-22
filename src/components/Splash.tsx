export default function Splash() {

    return (
        <div class="min-h-screen bg-cover flex justify-center items-center flex-col gap-8" style={{
            "background-image": "url(/assets/splash.svg)"
        }}>
            <img src="/assets/logo.svg" alt="Jundao" class="h-40"/>
            <h1 class="text-white text-4xl" style={{"font-weight": "bold"}}>Jundao</h1>
            <div class="flex justify-center items-center gap-8 text-lg text-white">
                <a href="https://design.jundao.app">
                    <img class="h-16" src="/assets/design.png" alt="Jundao Design"/>
                </a>
                <span>•</span>
                More Coming Soon!
            </div>
        </div>
    )
}
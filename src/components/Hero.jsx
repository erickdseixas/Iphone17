
function Hero(){

    return(
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 z-0">
              <img className="w-full h-full object-cover opacity-95" src="public/img/hero_endframe__gb7f6nb06rau_xlarge.jpg"></img>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
</svg>


            </div>
        </section>
    )
}

export default Hero
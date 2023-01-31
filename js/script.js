window.addEventListener('scroll', (ev)=>{
    document.body.style.cssText =`--scrollTop: ${this.scrollY}px`
})
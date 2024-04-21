const e=document.querySelectorAll(".section"),t=new IntersectionObserver(function(e,t){let[n]=e;n.isIntersecting&&(n.target.classList.remove("section--hidden"),t.unobserve(n.target))},{root:null,threshold:.07});e.forEach(function(e){t.observe(e),e.classList.add("section--hidden")});
//# sourceMappingURL=index.26111bd0.js.map

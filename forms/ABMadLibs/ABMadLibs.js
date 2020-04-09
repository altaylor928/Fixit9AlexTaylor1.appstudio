btnSubmit2.onclick=function(){
  let noun = inptNoun.value
  let adjective = inptAdjective.value
  let verb = inptVerb.value
  lblMadLibs.value = (`A ${noun} in Nebraska was arrested this morning after ${verb}ing in front of a ${adjective} ${noun}. The perpetrator had a history of ${verb}ing, but no one - Not even her ${noun} - ever imagined she'd ${verb} with a ${noun}.
    Even her ${noun} was surprised. "I always thought she was ${adjective}, but I never thought she'd do something like this."
    Either way, we imagine that after witnessing her ${verb}ing with a ${adjective} ${noun}, there are probably a whole lot of ${noun}s that are going to need therapy.`)
}

btnReload.onclick=function(){
  location.reload()
}
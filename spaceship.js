class Spaceship{
  constructor(name, crewmembers, phasers, shields){
    this.name = name

    this.crewmembers = crewmembers

    crewmembers.forEach(function(member){
      member.currentShip = this
    }.bind(this))

    this.phasers = phasers

    this.shields = shields

    this.cloaked = false

    this.phasersCharge = 'uncharged'

    if(this.crewmembers.length > 0){
      this.docked = false
    }else {
      this.docked = true
    }

    this.warpDrive = "disengaged"
  }
    // this.docked = function(){
    //   if(this.crewmembers.length > 0){
    //     false
    //   }else {
    //     true
    //   }
    // }

}

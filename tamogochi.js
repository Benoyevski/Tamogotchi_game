const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function () {
      if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
        return console.log(`${this.name} умер :(`);
      };

      if (this.meal >= 3 && this.energy >= 3) {
        return console.log(`name: ${this.name}, meal: ${this.meal}, energy: ${this.energy}, mood: 'ДЕРЖИТЕ МЕНЯ СЕМЕРО!!!'`);
      };

      console.log(`name: ${this.name}, meal: ${this.meal}, energy: ${this.energy}, mood: ${this.mood}.`);

      if (this.meal < 3) {
        this.meal = `Я голоден (${this.meal})`
      } else {this.meal = `Я не голоден (${this.meal})`};

      if (this.energy < 3) {
        this.energy = `Я хочу спать (${this.energy})`;
      } else {this.energy = `Я не голоден (${this.energy})`};

      if (this.mood < 3) {
        this.mood = `Мне скучно (${this.mood})`;
      } else {this.mood = `Мне весело (${this.mood})`};



    },
    setName: function(name) {
      this.name = name;
    },
    eat: function() {
      if (this.meal < 5) {
        this.meal += 1;
      };
        this.mood -= 1;
    },
    sleep: function() {
      if (this.energy < 5) {
        this.energy += 1;
      };
        this.meal -= 1;
    },
    play: function() {
      if (this.mood < 5) {
        this.mood += 1;
      };
        this.energy -= 1;
    } 
  }

  tamogotchi.getStatus();
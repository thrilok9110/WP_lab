

const person = {
    name: "Rahul",
    traditional: function() {
        console.log("Traditional:", this.name);
    },

    arrow: () => {
        console.log("Arrow:", this.name);
    }
};

person.traditional();
person.arrow();
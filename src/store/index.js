import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const colors = ["red", "yellow", "blue"];
const messages = [1, 2, 3];
const styles = ["solid", "dashed", "dotted"];
const pictures = ["▢", "◊", "▱"];
// const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const initialCards = [];
const allCards = [];
var index = 0;
colors.forEach((color) => {
  messages.forEach((message) => {
    styles.forEach((border) => {
      pictures.forEach((picture) => {
        index += 1;
        allCards.push({
          id: index,
          color,
          message,
          border,
          picture,
          selected: false,
        });
      });
    });
  });
});

allCards.sort(() => Math.random() - 0.5);

for (let index = 0; index < 12; index++) {
  const element = allCards.pop();
  initialCards.push(element);
}

const allTheSame = (cards, attr) =>
  cards[0][attr] == cards[1][attr] && cards[1][attr] == cards[2][attr];

const allDifferent = (cards, attr) =>
  cards[0][attr] !== cards[1][attr] &&
  cards[1][attr] !== cards[2][attr] &&
  cards[0][attr] !== cards[2][attr];

const isGood = (cards, attr) =>
  allDifferent(cards, attr) || allTheSame(cards, attr);

const anyGood = (cards) =>
  isGood(cards, "color") &&
  isGood(cards, "message") &&
  isGood(cards, "border") &&
  isGood(cards, "picture");

export default new Vuex.Store({
  state: {
    cards: initialCards,
    score: 0,
  },
  mutations: {
    toggle(state, id) {
      var card = state.cards.find((card) => card.id === id);
      if (card) card.selected = !card.selected;
    },
  },
  actions: {
    toggle({ state }, id) {
      var selecteds = state.cards.filter(({ selected }) => selected);

      var card = state.cards.find((card) => card.id === id);
      if (!card) return;
      if (card.selected) {
        card.selected = false;
      } else {
        if (selecteds.length == 3) return;
        card.selected = true;
        selecteds.push(card);
        // console.log(selecteds);

        selecteds.forEach((selected) => {
          console.log(state.cards.indexOf(selected));
        });

        if (selecteds.length == 3) {
          console.log(anyGood(selecteds));
          if (anyGood(selecteds)) {
            state.score += 3;
            selecteds.forEach((selected) => {
              const index = state.cards.indexOf(selected);
              console.log(state.cards.indexOf(selected));
              const newCard = allCards.pop();
              state.cards.splice(index, 1, newCard);
              console.log(index, newCard, allCards.length + " remaining");
              console.log(state.cards.indexOf(selected));
            });
          }
        }
      }
    },
  },
  modules: {},
});

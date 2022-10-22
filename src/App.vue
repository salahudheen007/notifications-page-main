<script>
import ActivityVue from "./components/Activity.vue";
import MarkWebber from "./assets/images/avatar-mark-webber.webp";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";
import AnnaChess from "./assets/images/image-chess.webp";
export default {
  name: "APP",
  components: {
    ActivityVue,
  },
  data() {
    return {
      activities: [
        {
          id: 1,
          proImage: MarkWebber,
          name: "Mark Webber",
          action: "reacted to your recent post",
          post: "My first tournament today!",
          group: "",
          photo: false,
          msgcontent: "",
          time: "1m ago",
          new: true,
        },
        {
          id: 2,
          proImage: Angela,
          name: "Angela Gray",
          action: "followed you",
          post: "",
          group: "",
          photo: false,
          msgcontent: "",
          time: "5m ago",
          new: true,
        },
        {
          id: 3,
          proImage: Jacob,
          name: "Jacob Thompson",
          action: "has joined your group",
          post: "",
          group: "Chess Club",
          photo: false,
          msgcontent: "",
          time: "1 day ago",
          new: true,
        },
        {
          id: 4,
          proImage: Rizky,
          name: "Rizky Hasanuddin",
          action: "sent you a private message",
          post: "",
          group: "",
          photo: false,
          msgcontent:
            " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
          time: "5 days ago",
          new: false,
        },
        {
          id: 5,
          proImage: Kimberly,
          name: "Kimberly Smith",
          action: "commented on your picture",
          post: "",
          group: "",
          photo: true,
          msgcontent: "",
          time: "1 week ago",
          new: false,
        },
        {
          id: 6,
          proImage: Nathan,
          name: "Nathan Peterson",
          action: "reacted to your recent post",
          post: "5 end-game strategies to increase your win rate",
          group: "",
          photo: false,
          msgcontent: "",
          time: "2 weeks ago",
          new: false,
        },
        {
          id: 7,
          proImage: Anna,
          name: "Anna Kim",
          action: "left the group",
          post: "",
          group: "Chess Club",
          photo: false,
          msgcontent: "",
          time: "2 weeks ago",
          new: false,
        },
      ],
      chess: AnnaChess,
      newCount:0
    };
  },
  methods: {
    markAsRead() {
      var count = 0;
      for (let i = 0; i < this.activities.length; i++) {
        this.activities[i].new=false;
      }
      this.newCount=0;
    },
  },
  mounted() {
    var count = 0;
      for (let i = 0; i < this.activities.length; i++) {
        if (this.activities[i].new === true) count++;
      }
      this.newCount=count;
  },
};
</script>

<template>
  <div class="content">
    <div class="header">
      <div class="left">
        <div><h2>Notifications</h2></div>
        <div><button class="count">{{newCount}}</button></div>
      </div>
      <div class="right">
        <button class="read" @click="markAsRead()">Mark all as read</button>
      </div>
    </div>
    <main>
      <activity-vue
        v-for="activity in activities"
        v-bind:key="activity.id"
        :activity="activity"
        :likedphoto="activity.photo && chess"
      />
    </main>
  </div>
</template>

<style scoped>
activity-vue {
  padding: 0.2rem;
  overflow: hidden;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  place-items: center;
}
.left {
  float: left;
  display: flex;
  flex-direction: row;
  place-items: center;
}
.right {
  float: right;
}
.read {
  border: none;
  background: white;
  color: hsl(219, 12%, 42%);
  font-size: 1rem;
  font-weight: 500;
}
.count {
  background: hsl(219, 85%, 26%);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-weight: 800;
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 6px 13px;
  margin-left: 10px;
}
@media only screen and (max-width: 375px) {
  activity-vue {
    width: 100%;
  }
}
@media only screen and (min-width: 376px) {
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>

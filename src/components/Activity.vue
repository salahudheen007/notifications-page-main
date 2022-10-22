<script>
export default {
  name: "Activity",
  props: ["activity","likedphoto"],
};
</script>
<template>
  <table v-bind:class="activity.new && 'newNotStyle'">
    <tr>
      <td id="pic">
        <div class="activity-profile">
          <img class="propic" :src="activity.proImage" alt="profile picture" />
        </div>
      </td>
      <td>
        <div class="activity-details">
          <p>
            <span id="name" v-text="activity.name + ' '"></span
            ><span id="action" v-text="activity.action + ' '"> </span>
            <span id="post" v-text="activity.post + ' '"></span>
            <span id="group" v-text="activity.group + ' '"></span>
            <span v-if="activity.new" id="dot">&#x2022;</span>
          </p>
          <p id="time">{{ activity.time }}</p>
        </div>
      </td>
      <td v-if="activity.photo">
        <img class="propic" :src="likedphoto" alt="myphoto">
      </td>
    </tr>
    <tr v-show="activity.msgcontent">
      <td><div class="activity-profile"></div></td>
      <td id="disc">
        <div class="activity-decription">
          <p id="decription">{{ activity.msgcontent }}</p>
        </div>
      </td>
    </tr>
  </table>
</template>
<style scoped>
table {
  width: 100%;
  border-radius: 0.3rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}
.newNotStyle {
  background-color: #e2ecf3;
}
.activity-details {
  text-align: left;
  overflow: hidden;
}

#name {
  color: hsl(224, 21%, 14%);
  font-weight: 800;
}
#action {
  color: hsl(219, 12%, 42%);
}
#post {
  color: hsl(219, 12%, 42%);
  font-weight: 800;
}
#group {
  color: hsl(219, 85%, 26%);
  font-weight: 800;
}
#time {
  color: hsl(219, 14%, 63%);
}
#dot {
  color: red;
  font-weight: 800;
}
#decription {

  text-align: left;
  padding: 0.5rem 1rem;
  color: hsl(217, 9%, 53%);
}
.activity-decription{
  border-width: .9px;
  border-color: hsl(219, 14%, 63%);
  border-style: solid;
  border-radius: 5px;
}

#name:hover,#post:hover{
  color: hsl(219, 85%, 26%);

}
#group:hover,#name:hover,#post:hover,#disc:hover{
  cursor: pointer;
}
#disc:hover{
  background-color: #e2ecf3;
}
@media only screen and (max-width: 375px) {
  .propic {
    width: 2.5rem;
  }
  .activity-profile {
    width: 3rem;
    padding: 3px;
  }
}
@media only screen and (min-width: 376px) {
  table{
    width: 100%;
    padding: .5rem;
  }
  .propic {
    width: 3rem;
  }
  #pic{
    width: 3.8rem;
  }
}
</style>
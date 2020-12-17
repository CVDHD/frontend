<template>
<div >
  <a-comment v-for="(notify, index) in listNotify" :key="index" class="notify">
    <a-icon type="delete" class="delete" title="Delete"/>
    <a-icon type="edit" class="edit" title="Edit" @click="editNotify(notify.title, notify.content, notify.id)"/>
    <template slot="actions" >
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span><br>
      <p>{{notify.updated_at}}</p>
    </template>
    <a slot="author">{{notify.title}}</a>
    <a-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
    />
    <p slot="content">
      {{notify.content}}
    </p>
    <hr>
  </a-comment>

  </div>
</template>
<script>
import moment from 'moment';
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
      action: null,
      moment,
    };
  },
  props:{
    showForm: {
      type: Function,
      required: true
    },
    infoNotify: {
      type: Function,
      required: true
    }
  },
  methods: {
    ...mapActions({

    }),
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = 'liked';
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = 'disliked';
    },
    editNotify(title, content, id){
      this.showForm("Chỉnh sửa thông báo")
      this.infoNotify(title, content, id)
    }
  },
  computed:{
    ...mapGetters({
      listNotify: 'commonModule/getListNotify'
    })
  }
};
</script>
<style lang="scss" scoped>
.notify{
  background-color: yellow;
  position: relative;
  .edit{
    position: absolute;
    top: 10px;
    right: 40px;
    font-size: 20px;
    cursor: pointer;
    color: green;

  }
  .delete{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: rgb(128, 0, 0);

  }
}
</style>

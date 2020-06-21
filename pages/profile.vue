<template>
    <sui-container style="margin:20px 0"> 
      <sui-segment raised style="margin-bottom:20px">
          <h3 is="sui-header">내 프로필</h3>
          <sui-divider />
          <sui-form>
              <sui-form-field>
                  <label>닉네임</label>
                  <input type="text" value="닉네임" />
              </sui-form-field>
              <sui-button positive type="submit">수정하기</sui-button>    
          </sui-form>
      </sui-segment> 
      <sui-segment raised style="margin-bottom:20px">
          <h3 is="sui-header">팔로잉</h3>
          <sui-divider />
          <follow-list />
          
      </sui-segment>  
      <sui-segment raised style="margin-bottom:20px">
          <h3 is="sui-header">팔로워</h3>
          <sui-divider />
          <follow-list />
      </sui-segment>  
    </sui-container>
</template>

<script>
import FollowList from '~/components/FollowList';

export default {
  components: {
    FollowList,
  }
}
</script>

<style lang="scss" scope>

</style>
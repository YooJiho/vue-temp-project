<template>
  <div style="margin:20px 0">
    <sui-segment raised v-if="!me">
      <sui-form @submit.prevent="onSubmitForm">
        <sui-form-field :error="!emailValid">
          <label>아이디</label>
          <input v-model="email" type="text" placeholder="아이디를 입력하세요." @blur="checkedEmail"/>
        </sui-form-field>
        <sui-form-field :error="!pwdValid">
          <label>비밀번호</label>
          <input v-model="password" type="password" placeholder="비밀번호를 입력하세요." @blur="checkedPwd"/>
        </sui-form-field>
        <sui-button primary type="submit">로그인</sui-button>
        <a is="sui-button" href="/signup" color="green">회원가입</a>
      </sui-form>
    </sui-segment>
    
    <sui-segment v-else>
      <h4 is="sui-header">{{me.nickname}}님, 로그인 되었습니다.</h4>
      <sui-button primary type="button" @click="onLogout">로그아웃</sui-button>
    </sui-segment >
  </div>
</template>

<script>
export default {
    data() {
        return {
            valid : false,
            email : '',
            password : '',
            emailValid : true,
            pwdValid : true,
        }
    },
    computed : {
      me() {
        return this.$store.state.users.me;
      }
    },
    methods : {
        checkedEmail() {
            let limitEmail = !this.email || !(/.+@.+/.test(this.email));
            this.emailValid = !limitEmail;
        },
        checkedPwd() {
            this.pwdValid = this.password;
        },
        onSubmitForm() {
            this.valid = this.emailValid && this.pwdValid;
            if (this.valid) {
                this.$store.dispatch('users/logIn', {
                  nickname : 'temp',
                  email : this.email
                });
            } else {
                alert('아직 안됨');
            }
        },
        onLogout() {
            this.$store.dispatch('users/logOut');
        }
    }
}
</script>

<style lang="scss">

</style>


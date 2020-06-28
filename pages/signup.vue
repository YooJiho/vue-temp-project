<template>
    <sui-segment raised style="margin:20px 0">
        <h3 is="sui-header">회원가입</h3>
        <sui-divider />
        <sui-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <sui-form-field v-bind:error="!emailValid">
                <label>이메일</label>
                <input type="email" v-model="email" @blur="checkedEmail" placeholder="이메일을 입력하세요." />
            </sui-form-field>
            <sui-form-field v-bind:error="!pwdValid">
                <label>비밀번호</label>
                <input type="password" v-model="password" @blur="checkedPwd" placeholder="비밀번호를 입력하세요." />
            </sui-form-field>
            <sui-form-field v-bind:error="!pwdChkValid">
                <label>비밀번호 확인</label>
                <input type="password" v-model="passwordCheck" @blur="checkedPwdChk" placeholder="비밀번호를 다시 입력하세요." />
            </sui-form-field>
            <sui-form-field v-bind:error="!nickValid">
                <label>닉네임</label>
                <input type="text" v-model="nickname" @blur="checkedNickname" placeholder="닉네임을 입력하세요." />
            </sui-form-field>
            <sui-form-field v-bind:error="!termValid">
                <sui-checkbox label="모든 약관에 동의합니다." v-model="terms" />
            </sui-form-field>
            <sui-button positive type="submit">회원가입</sui-button>
        </sui-form>
    </sui-segment>
</template>

<script>
export default {
    data() {
      return {
          valid : false,
          email : '',
          password : '',
          passwordCheck : '',
          nickname : '',
          terms : false,
          emailValid : true,
          pwdValid : true,
          pwdChkValid : true,
          nickValid : true,
          termValid : true
      }
    },
    methods: {
        checkedEmail() {
            let limitEmail = !this.email || !(/.+@.+/.test(this.email));
            this.emailValid = !limitEmail;
        },
        checkedPwd() {
            this.pwdValid = this.password;
        },
        checkedPwdChk() {
            let limitPwd = !this.passwordCheck || this.passwordCheck !== this.password;
            this.pwdChkValid = !limitPwd;
        },
        checkedNickname() {
            this.nickValid = this.nickname;
        },
        onSubmitForm() {
            this.termValid = this.terms;
            this.valid = this.emailValid && this.pwdValid && this.pwdChkValid && this.nickValid && this.termValid;
            if (this.valid) {
                alert('통과');
            } else {
                alert('아직 안됨');
            }
        } 
    },
    head() {
        return {
            title : '회원가입',
        };
    }
}
</script>

<style lang="scss" scope>

</style>
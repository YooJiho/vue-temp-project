<template>
<sui-segment raised style="margin:20px 0">
    <sui-form>
        <sui-form-field>
            <label>아이디</label>
            <input placeholder="아이디를 입력하세요." />
        </sui-form-field>
        <sui-form-field>
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력하세요."/>
        </sui-form-field>
        <sui-button primary type="submit">로그인</sui-button>
        <a href="/signup" is="sui-button" color="green" type="submit">회원가입</a>
  </sui-form>
</sui-segment>
</template>

<style lang="scss">

</style>

<script>
export default {
    
}
</script>
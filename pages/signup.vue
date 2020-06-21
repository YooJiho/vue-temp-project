<template>
    <sui-segment raised style="margin:20px 0">
        <h3 is="sui-header">회원가입</h3>
        <sui-divider />

        <sui-form>
            <sui-form-field>
                <label>이메일</label>
                <input type="text" placeholder="이메일을 입력하세요." />
            </sui-form-field>
            <sui-form-field>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호를 입력하세요."/>
            </sui-form-field>
            <sui-form-field>
                <label>비밀번호 확인</label>
                <input type="password" placeholder="비밀번호를 다시 입력하세요."/>
            </sui-form-field>
            <sui-form-field>
                <label>닉네임</label>
                <input type="text" placeholder="닉네임을 입력하세요."/>
            </sui-form-field>
            <sui-form-field>
            <sui-checkbox label="모든 약관에 동의합니다." v-model="value" />
            </sui-form-field>
            <sui-button positive type="submit">회원가입</sui-button>
            
    </sui-form>
    </sui-segment>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {

  }
})
</script>

<style lang="scss" scope>

</style>
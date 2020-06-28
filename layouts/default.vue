<template>
  <div>
    <div style="height:55px">
      <sui-menu inverted fixed>	
        <sui-container>
          <sui-menu-item is="sui-menu-header">
            <sui-header size="medium"><a href="/" style="color:#fff">FakeBook</a></sui-header>
          </sui-menu-item>
          <sui-menu-item>
            <sui-input placeholder="검색어를 입력하세요." icon="search" size="small" />
          </sui-menu-item>
          <sui-menu-menu position="right">
            <a is="sui-menu-item" href="/profile">프로필</a>
            <a is="sui-menu-item" href="/signup">회원가입</a>
          </sui-menu-menu>
        </sui-container>
      </sui-menu>
    </div>
    <sui-container>
      <sui-grid>
        <sui-grid-row>
          <sui-grid-column :width="4">
            <login-form />
          </sui-grid-column>
          <sui-grid-column :width="12">
            <nuxt />
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </sui-container>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm';

export default {
	components: {
		LoginForm
	}
}
</script>

<style lang="scss" scope>

</style>

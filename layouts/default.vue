<template>
	<div>
	<sui-menu inverted fixed>	
		<sui-container>
			<sui-menu-item is="sui-menu-header">FakeBook</sui-menu-item>
			<sui-menu-item>
				<sui-input placeholder="검색어를 입력하세요." icon="search" size="small" />
			</sui-menu-item>

			<sui-menu-menu position="right">
				<a is="sui-menu-item">프로필</a>
				<a is="sui-menu-item">회원가입</a>
			</sui-menu-menu>

		</sui-container>
	</sui-menu>
	<nuxt />
	</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scope>

</style>

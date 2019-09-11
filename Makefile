########################################################
version-major:
	@yarn run release -- --release-as major
	@npm publish

version-minor:
	@yarn run release -- --release-as minor
	@npm publish

version-release:
	@yarn run release -- --release
	@npm publish
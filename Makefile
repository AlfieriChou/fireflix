########################################################
version-major:
	@yarn run tsc
	@yarn run release -- --release-as major
	@git push --follow-tags origin master
	@npm publish

version-minor:
	@yarn run tsc
	@yarn run release -- --release-as minor
	@git push --follow-tags origin master
	@npm publish

version-release:
	@yarn run tsc
	@yarn run release -- --release
	@git push --follow-tags origin master
	@npm publish
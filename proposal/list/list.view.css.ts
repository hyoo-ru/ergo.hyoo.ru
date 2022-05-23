namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $hyoo_ergo_proposal_list , {

		Filter: {
			maxHeight: px(40),
		},

		Proposal_info: {
			alignItems: 'center',
			padding: {
				bottom: 0,
			},
		},

		Proposal_comment: {
			color: $mol_theme.text,
		},

		Proposal_creator: {
			color: $mol_theme.special,
			margin: 0,
		},

	} )

}

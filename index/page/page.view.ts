namespace $.$$ {

	export class $hyoo_ergo_index_page extends $.$hyoo_ergo_index_page {

		@ $mol_mem
		search_results() {
			if (!this.search()) return []

			const ids = this.domain().index().search( this.search() )
			return ids
		}

		links() {
			return this.search_results().map( id => this.Thesis_link(id) )
		}

		thesis_link(id: string) {
			return id
		}

		thesis_link_title(id: string) {
			return this.domain().thesis().item(id).edition().text().replace(/\n/g, ' ')
		}

	}

}

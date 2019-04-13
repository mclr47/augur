<template>
	<div>
		<div class=" col ">
			<h3>Add Project:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Name" id="add-proj-name">
				</div>
				
				<div class="col col-2">
					<input type="text" placeholder="Description" id="add-proj-description">
				</div>

				<div class="col col-2">	
					<input type="text" placeholder="Website" id="add-proj-website">
				</div>

				<div class="col col-3">
					<input type="button" @click="addProject" value="Add Project">
				</div>
			</div>

		<div class=" col ">
			<h3>Delete Project:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Project ID" id="delete-proj-id">
				</div>

				<div class="col col-3">
					<input type="button" @click="deleteProject" value="Delete Project">
				</div>
			</div>

			<div class=" col ">
			<h3>Add Repo:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Project's ID" id="add-repo-id">
				</div>
				
				<div class="col col-2">
					<input type="text" placeholder="Git" id="add-repo-git">
				</div>

				<div class="col col-3">
					<input type="button" @click="addRepo" value="Add Repo">
				</div>
			</div>

			<div class=" col ">
			<h3>Delete Repo:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Repo ID" id="delete-repo-id">
				</div>
				

				<div class="col col-3">
					<input type="button" @click="deleteRepo" value="Delete Repo">
				</div>
			</div>

			<div class=" col ">
			<h3>Add Affiliation:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Domain" id="add-aff-domain">
				</div>
				
				<div class="col col-2">
					<input type="text" placeholder="Affiliation" id="add-aff-aff">
				</div>

				<div class="col col-2">
					<input type="text" placeholder="Start Date" id="add-aff-date">
				</div>

				<div class="col col-3">
					<input type="button" @click="addAffiliation" value="Add Affiliation">
				</div>
			</div>
			
			<div class=" col ">
			<h3>Delete Affiliation:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Affiliation ID" id="delete-aff-id">
				</div>
				

				<div class="col col-3">
					<input type="button" @click="deleteAffiliation" value="Delete Affiliation">
				</div>
			</div>

			<div class=" col ">
			<h3>Add Alias:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Alias" id="add-alias-alias">
				</div>
				
				<div class="col col-2">
					<input type="text" placeholder="Canonical" id="add-alias-canonical">
				</div>

				<div class="col col-3">
					<input type="button" @click="addAlias" value="Add Alias">
				</div>
			</div>

			<div class=" col ">
			<h3>Delete Alias:</h3>
		</div>
			<div class="row">
				<div class="col col-2">
					<input type="text" placeholder="Alias ID" id="delete-alias-id">
				</div>
				

				<div class="col col-3">
					<input type="button" @click="deleteAlias" value="Delete Alias">
				</div>
			</div>


	</div>
</template>
<script type="text/javascript">
  module.exports = {
	methods: {

		addProject (){
			var name = document.getElementById("add-proj-name").value;
			var description = document.getElementById("add-proj-description").value;
			var website = document.getElementById("add-proj-website").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_add_project?name='+name+'&description='+description+'&website='+website);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
					
		},

		deleteProject (){
			var id = document.getElementById("delete-proj-id").value;
			

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_delete_project?project_id='+id);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
	
			
		},

		addRepo (){
			var project_id = document.getElementById("add-repo-id").value;
			var git = document.getElementById("add-repo-git").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_add_repo?project_id='+project_id+'&git_repo='+git);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
		},

		deleteRepo (){
			var git_repo = document.getElementById("delete-repo-id").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_delete_repo?git_repo='+git_repo);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
		},

		addAffiliation (){
			var dom = document.getElementById("add-aff-domain").value;
			var aff = document.getElementById("add-aff-aff").value;
			var date = document.getElementById("add-aff-date").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_add_affiliation?domain='+dom+'&affiliation='+aff+'&start_date='+date);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
		},

		deleteAffiliation (){
			var affid = document.getElementById("delete-aff-id").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_delete_affiliation?affiliation_id='+affid);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
		},

		addAlias (){
			var alias = document.getElementById("add-alias-alias").value;
			var canonical = document.getElementById("add-alias-canonical").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_add_alias?alias='+alias+'&canonical='+canonical);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
		},

		deleteAlias (){
			var aliasid = document.getElementById("delete-alias-id").value;

			const url=('http://0.0.0.0:5000/api/unstable/facade/cli_delete_alias?alias_id='+aliasid);
			console.log(url);

			const method={
				method: "POST", 
				mode: 'no-cors'
			}

			fetch(url, method)
		}

	}
}
</script>